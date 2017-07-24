/*
 * d3 component, using the d3ComponentBase
 */
 define(['d3ComponentLibrary/components/D3ComponentBase'], function(D3ComponentBase){
 var D3Component =  D3ComponentBase.extend({
    defaultWidth: 600,
    defaultHeight: 400
   });

  return D3Component;
});