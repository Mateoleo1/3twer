function startClassification() {
navegator.mediaDevices.getUserMedia({audio:true});
classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/h2tCWMWcl/model.json", som)



}
function som () {
  console.log("Proyecto generado");
  classifier.classify(casa);
  }
  function casa (error,results){
if(error){console.error(error)} else{
  
}
}