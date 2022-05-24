/* eslint-disable no-unused-vars */
const Service = require('./Service');
const { Metric } = require('../models/Metric');

/**
* Creates the data
*
* metric Metric data to be created
* returns metric
* */
const createmetric = ({ metric }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await new Metric(metric).save();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Delete the element
*
* metricId String the Id parameter
* no response value expected for this operation
* */
const deletemetric = ({ metricId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Metric.findOneAndDelete({ _id:metricId }).exec();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get all the data
*
* returns Object
* */
const getAllmetric = () => new Promise(
  async (resolve, reject) => {
    try {
      let query = {}
      query = await Metric.find().exec();
      resolve(Service.successResponse(query));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get the element
*
* metricId String the Id parameter
* returns metric
* */
const getmetric = ({ metricId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Metric.findById(metricId)
      .exec();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Updates the element
*
* metricId String the Id parameter
* metric Metric data to be updated (optional)
* returns metric
* */
const updatemetric = ({ metricId, metric }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Metric.findOneAndUpdate({ _id:metricId },metric).exec();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

module.exports = {
  createmetric,
  deletemetric,
  getAllmetric,
  getmetric,
  updatemetric,
};
