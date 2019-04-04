import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
import { CameraPreview, CameraPreviewPictureOptions, CameraPreviewOptions, CameraPreviewDimensions } from '@ionic-native/camera-preview/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit  {

  constructor(private camera: Camera, private router:Router, private cameraPreview: CameraPreview) { }
  

  ngOnInit(){

  }

  openARCamera(){
    

    // const cameraPreviewOpts: CameraPreviewOptions = {
    //   x: 0,
    //   y: 0,
    //   width: window.screen.width,
    //   height: window.screen.height,
    //   camera: 'rear',
    //   tapPhoto: true,
    //   previewDrag: true,
    //   toBack: true,
    //   alpha: 1
    // }

    // this.cameraPreview.startCamera(cameraPreviewOpts).then((info) => {
    //   alert(info);
    // }).catch((err) => {
    //   alert(err);
    // });
    
    
    


    this.router.navigate(['../ar'])
  }

  openNormalCamera(){
    const cameraOpts: CameraOptions = {
      quality: 100,
  destinationType: this.camera.DestinationType.FILE_URI,
  encodingType: this.camera.EncodingType.JPEG,
  mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(cameraOpts).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      let base64Image = 'data:image/jpeg;base64,' + imageData;
     }, (err) => {
      // Handle error
     });

  }

  
}