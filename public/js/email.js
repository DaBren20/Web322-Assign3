$('form').on('submit', (e) => {
    e.preventDefault();

    const firstname = $('#firstname').val().trim();
    const lastname = $('#lastname').val().trim();
    const email = $('#email').val().trim();
    const password = $('#password').val().trim();

    const data = {
        firstname,
        lastname,
        email,
        password
    };

    $.post('/signup', data, function() {
        console.log('server recieved data');
    });
})