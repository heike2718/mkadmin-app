import { Component, OnInit, ViewChild } from '@angular/core';
import { UploadService } from './upload.service';
import { forkJoin } from 'rxjs';

@Component({
	selector: 'mkadm-upload',
	templateUrl: './upload.component.html',
	styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

	@ViewChild('file', { static: false }) file;

	public files: Set<File> = new Set();


	progress;
	uploading = false;
	uploadSuccessful = false;
	canSubmit = false;


	constructor(private uploadService: UploadService) { }

	ngOnInit() {

	}

	onFilesAdded() {
		const files: { [key: string]: File } = this.file.nativeElement.files;
		for (const key in files) {
			if (!isNaN(parseInt(key, 0))) {
				this.files.add(files[key]);
			}
		}
	}

	addFiles() {
		this.file.nativeElement.click();
		this.canSubmit = true;
	}

	submitUpload(): void {

		if (this.uploadSuccessful) {
			return;
		}

		this.uploading = true;

		this.progress = this.uploadService.upload(this.files);

		console.log(this.progress);
		// tslint:disable-next-line: forin
		for (const key in this.progress) {
			this.progress[key].progress.subscribe(val => console.log(val));
		}

		// convert the progress map into an array
		const allProgressObservables = [];
		// tslint:disable-next-line: forin
		for (const key in this.progress) {
			allProgressObservables.push(this.progress[key].progress);
		}

		forkJoin(allProgressObservables).subscribe(end => {
			this.uploadSuccessful = true;
			this.uploading = false;
			this.canSubmit = false;
			this.files.clear();
		});
	}
}
