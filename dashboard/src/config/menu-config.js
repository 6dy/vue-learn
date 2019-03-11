

var menu = [{
  name:'basic',
  id: 'basic',
  sub: [{
    name:'Layout',
    componentName: 'BasicLayout'
  },
  {
    name:'Container',
    componentName: 'BasicContainer'
  }]
},{
  name:'form',
  id:'form',
  sunv:[{
    name:'Radio',
    componentName:'FormRadio'
  },
  {
    name:'Checkbox',
    componentName:'FormCheckbox'
  }]
}]

module.exports = menu;