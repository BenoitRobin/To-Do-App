<script>
    import { auth, googleProvider } from './firebase';
    import { authState } from 'rxfire/auth';
    import { Button, Card, CardBody, CardFooter, CardHeader, CardSubtitle, CardText, CardTitle } from 'sveltestrap';

    let user;

    let unsubscribed = authState(auth).subscribe(u => user = u);

    function login() {
        auth.signInWithPopup(googleProvider);
        
    }

</script>

<Card class="mb-3">
    {#if user}
    <CardHeader>
        <CardTitle>To Do List | <Button class="log-out-btn" on:click={() => auth.signOut()}>Deconnexion</Button></CardTitle>
    </CardHeader>
    <CardBody>

    </CardBody>

    {:else}
    <CardHeader>
        <CardTitle>To Do List | Log In</CardTitle>
    </CardHeader>
    <CardBody>
        <Button class="log-out-btn" on:click={login}>Connexion avec Google</Button>
    </CardBody>
    {/if}
    <CardFooter>Fabriqué en &#127467;&#127479; avec &#10084;&#65039;</CardFooter>
</Card>

<style type="text/scss">

</style> 