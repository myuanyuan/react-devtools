
module.exports = function (scriptName, reporter, done) {
  var src = `
  var script = document.createElement('script');
  script.src = "${scriptName}";
  document.documentElement.appendChild(script);
  script.parentNode.removeChild(script);
  var frame = document.createElement('iframe');
  frame.className = 'react-devtools-reporter';
  frame.src = "${reporter}";
  document.head.appendChild(frame);
  `;

  chrome.devtools.inspectedWindow.eval(src, function (res, err) {
    console.log(err);
    done();
  })
}
