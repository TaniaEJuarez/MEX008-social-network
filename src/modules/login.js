let Login = {
    render: async () => {
        let view = /* html */ `
         <div class="conteiner">
        
            <form class="login">
            <!-- The surrounding HTML is left untouched by FirebaseUI.
            Your app may use that space for branding, controls and other customizations.-->
            <h1><img src="../icon/FAVORITO.png" alt="imagen-logo" id="logo"></h1>
            <div id="loader">Login or sign up</div> <br>
            <div id="firebaseui-auth-container"></div>
            
        
         </form>
        </div>
        `
        return view
    },
    after_render: async () => {
        // Initialize Firebase
        // firebase.initializeApp(firebaseConfig);
        var ui = new firebaseui.auth.AuthUI(firebase.auth());

        // <!--registrarse-->
        var uiConfig = {
            callbacks: {
                signInSuccessWithAuthResult: function (authResult, redirectUrl) {
                    // User successfully signed in.
                    // Return type determines whether we continue the redirect automatically
                    // or whether we leave that to developer to handle.
                    return true;
                },
                uiShown: function () {
                    // The widget is rendered.
                    // Hide the loader.
                    document.getElementById('loader').style.display = 'none';
                }
            },
            // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
            signInFlow: 'popup',
            signInSuccessUrl: './#/muro',
            signInOptions: [
                // Leave the lines as is for the providers you want to offer your users.
                firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                firebase.auth.FacebookAuthProvider.PROVIDER_ID,
                firebase.auth.TwitterAuthProvider.PROVIDER_ID,
                firebase.auth.GithubAuthProvider.PROVIDER_ID,
                firebase.auth.EmailAuthProvider.PROVIDER_ID,
                firebase.auth.PhoneAuthProvider.PROVIDER_ID
            ],
            // Terms of service url.
            tosUrl: '<your-tos-url>',
            // Privacy policy url.
            privacyPolicyUrl: '<your-privacy-policy-url>'
        };

        //Login con gmail
        ui.start('#firebaseui-auth-container', {
            signInOptions: [
                // List of OAuth providers supported.
                firebase.auth.EmailAuthProvider.PROVIDER_ID,
                firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                //firebase.auth.FacebookAuthProvider.PROVIDER_ID,
                firebase.auth.TwitterAuthProvider.PROVIDER_ID,
                // firebase.auth.GithubAuthProvider.PROVIDER_ID
            ],
            // Other config options...
        });

    }
}
export default Login;






