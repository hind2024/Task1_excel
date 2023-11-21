
import multer from "multer";

export const Uploade=(fieldName)=>{
    const storage= multer.diskStorage({});
   
    // function fileFilter (req, file, cb) {
    //     if(file.mimeType.startsWith('excel')){
    //         cb(null, true)
    //     }else{
    //         cb(new AppError('INvalid path',400), false) 
    //     }
        
          
    //       }
   const  uploade= multer({storage:storage})

     return uploade.single(fieldName)
}