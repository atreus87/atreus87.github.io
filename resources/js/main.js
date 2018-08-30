window.onload = function main() {
    var hash = window.location.hash.substr(1).toLowerCase();

    setTimeout(function () {
        if (hash === "") {
            loadContent("home");
        } else {
            loadContent(hash);
        }

        alertWarning('This site is still under construction!');
    }, 500);
}

function clearAlert() {
    $('.inner-alert-container').html('');
}

function alertWarning(content) {
    showAlert('warning', content)
}

function alertDanger(content) {
    showAlert('danger', content)
}

function showAlert(severity, content) {
    $('.inner-alert-container').html('<div class="alert alert-' + severity + '" role="alert">' + content + '</div>');
}

function loadContent(page) {
    var path = 'resources/html/' + page.toLowerCase() + '.html';
    $('.inner-content-container').load(path, function( response, status, xhr ) {
        if ( status == "error" ) {
            alertDanger("The " + page + " page doesn't exist!")
        }
    });
}
