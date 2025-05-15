const SUPABASE_URL = 'https://askkai.supabase.co';
const SUPABASE_KEY = 'your_actual_anon_public_key_here';
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

const isDev = true;
if (!isDev) document.getElementById('dev-access-banner')?.style.display = 'none';

// Shared Auth State Handler (OAuth)
supabase.auth.onAuthStateChange((event, session) => {
    if (session) {
        sessionStorage.setItem('askkaiUser', session.user.email);
        window.location.href = '/index.html';
    }
});

// Shared Input Validation
function validateInputs(email, password) {
    if (!email || !password) {
        alert('Please enter both email and password.');
        return false;
    }
    return true;
}

// Loading State Handler
function setLoadingState(button, isLoading, text) {
    button.disabled = isLoading;
    button.innerText = isLoading ? `${text}...` : text;
}
