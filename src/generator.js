
const NL = "\n";

function create (values, name, param, units) {
    let css = '';
    values.forEach((n) => {css += name + n + `{${param}:${n}${units}}`});
    return css + NL;
}

let css = '';
let values = [1,2,3,4,5];

css += create (values,'.p-', 'padding', 'rem');
css += create (values,'.pt-', 'padding-top', 'rem');
css += create (values,'.pb-', 'padding-bottom', 'rem');
css += create (values,'.pl-', 'padding-left', 'rem');
css += create (values,'.pr-', 'padding-right', 'rem');

css += create (values,'.m-', 'margin', 'rem');
css += create (values,'.mt-', 'margin-top', 'rem');
css += create (values,'.mb-', 'margin-bottom', 'rem');
css += create (values,'.ml-', 'margin-left', 'rem');
css += create (values,'.mr-', 'margin-right', 'rem');

values = [1,2,3,4,5,10,15,20,25,33,50,75,80,85,90,95,96,97,98,99,100];
css += '*[class^="width-"] {display: inline-block}' + NL;
css += create (values,'.width-', 'width', '%');
css += create (values,'.height-', 'height', '%');
css += create (values,'.vw-', 'width', 'vw');
css += create (values,'.vh-', 'height', 'vh');


module.exports = {css: css};
