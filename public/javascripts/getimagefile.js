function getImage(){
  console.log("we are calling from get Image file");
  $.get('/getImage',function(data){
    if(data){
      //console.log(data.length);
      document.getElementById('myimg').innerHTML = '<img alt="abhinav image" src="data:image/jpeg;base64,' + (data) + '" />';
    }
  });
}
