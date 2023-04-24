export const changeLayout = () => {
   let containerImg = document.querySelector('.gamePhotos');
   var childCount = containerImg.children.length;
   
   containerImg.classList.remove('ninePhotos');
   containerImg.classList.remove('treePhotos');
   containerImg.classList.remove('sixPhotos');
   containerImg.classList.remove('tewelvePhotos');

   if (childCount <= 3) {
     containerImg.classList.add('treePhotos');
   } else if (childCount > 3 && childCount <= 6) {
     containerImg.classList.add('sixPhotos');
     console.log('arg')
   }
   else if (childCount > 6 && childCount <= 9) {
     containerImg.classList.add('ninePhotos');
   }
   else if (childCount > 9) {
     containerImg.classList.add('tewelvePhotos');
   }
   else {
     console.log('error')
   }
 }