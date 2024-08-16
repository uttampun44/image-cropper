type imageType =  "jpg" | "jpeg" | "png" | "webp" | "svg" | "accept/*" 
 
interface ImageCropProps  {
  accept?: imageType[],
  style?:string,
  className?:string,
  type:string
  ratio?:number
}

export default ImageCropProps