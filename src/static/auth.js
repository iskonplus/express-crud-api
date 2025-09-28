const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const nickName = loginForm[0].value;
    const password = loginForm[1].value;

    try {
        const res = await fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nickName, password })
        });

        const data = await res.json();

        if (res.ok) {
            console.log('Response', data)
        } else {
            alert(data.errorText);
        }

    } catch (err) {
        console.error('Login error:', err);
    }

})