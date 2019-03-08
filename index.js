const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
    var err =''
    var weight =''
    var packType =''
express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/postage', (req, res) => {
     err =''
     weight = +req.query.weight
     packType = req.query.packageType
    let myResult = postCalc(+req.query.weight, req.query.packageType) 
    if (!myResult){
      err = 'This selection is to heavy, choose a large envelope or package.'
   }
    //console.log(weight, packType) 
    //console.log(myResult, err)
    res.render('postalResult.ejs', {result: myResult, error: err, weight: weight, type: packType})
  })
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

 // switch cases for postal tables. 

  function postCalc (Weight, packageType) {
    switch (packageType) {
      case 'stamped letter':
        switch (Weight){
          case 1:
            return '0.55'
            break
          case 1.5:
            return '0.55'
            break
          case 2:
            return '0.70'
            break
          case 2.5:
            return '0.70'
            break
          case 3:
            return '0.85'
            break
          case 3.5:
            return '1.00'
            break      
      }  
      break
      case 'metered letter':
      switch (Weight){
        case 1:
          return '0.50'
          break
        case 1.5:
          return '0.50'
          break
        case 2:
          return '0.65'
          break
        case 2.5:
          return '0.65'
          break
        case 3:
          return '0.80'
          break
        case 3.5:
          return '0.95'
          break      
    } 
        break
        case 'large envelope':
        switch (Weight){
          case 1:
            return '1.00'
            break
          case 1.5:
            return '1.00'
            break
          case 2:
            return '1.15'
            break
         case 2.5:
            return '1.15'
            break
          case 3:
            return '1.30'
            break
          case 3.5:
            return '1.30'
            break
          case 4:
            return '1.45'
            break 
          case 4.5:
            return '1.45'
            break 
          case 5:
            return '1.60'
            break
          case 5.5:
            return '1.60'
            break
          case 6:
            return '1.75'
            break
          case 6.5:
            return '1.75'
            break
          case 7:
            return '1.90'
            break
            case 7.5:
            return '1.90'
            break
          case 8:
            return '2.05'
            break
          case 8.5:
            return '2.05'
            break
          case 9:
            return '2.20'
            break
          case 9.5:
            return '2.20'
            break
          case 10:
            return '2.35'
            break
          case 10.5:
            return '2.35'
            break
          case 11:
            return '2.50'
            break
          case 11.5:
            return '2.50'
            break
          case 12:
            return '2.65'
            break  
          case 12.5:
            return '2.65'
            break  
          case 13:
            return '2.80'
            break    
      } 
        break
      case 'package':
        switch (Weight){
          case 1:
            return '3.66'
            break
          case 2:
            return '3.66'
            break
          case 3:
            return '3.66'
            break
          case 4:
            return '3.66'
            break    
          case 5:
            return '4.39'
            break
          case 6:
            return '4.39'
            break
          case 7:
            return '4.39'
            break
          case 8:
            return '4.39'
            break
          case 9:
            return '5.19'
            break
          case 10:
            return '5.19'
            break
          case 11:
            return '5.19'
            break
          case 12:
            return '5.19'
            break
          case 1.5:
            return '3.66'
            break
          case 2.5:
            return '3.66'
            break
          case 3.5:
            return '3.66'
            break
          case 4.5:
            return '3.66'
            break    
          case 5.5:
            return '4.39'
            break
          case 6.5:
            return '4.39'
            break
          case 7.5:
            return '4.39'
            break
          case 8.5:
            return '4.39'
            break
          case 9.5:
            return '5.19'
            break
          case 10.5:
            return '5.19'
            break
          case 11.5:
            return '5.19'
            break
          case 12.5:
            return '5.19'
            break
          case 13:
            return '5.71'
            break  
        break
    }
    break
  } 
}