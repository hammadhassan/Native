const app = require('express');
const bodyParser = require('body-parser');
const fs = require('fs')
const Speech = require('@google-cloud/speech');
const language = require('@google-cloud/language');
