
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const metricSchema = new Schema({
Underscoreid:String , 


age:Number , 


BMI:Number , 


waist:Number , 


vegfruit:Number , 


protein:Number 



})

module.exports = {
  Metric : mongoose.model('metric', metricSchema),
}

