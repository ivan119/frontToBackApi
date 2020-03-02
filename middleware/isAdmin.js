export default function ({$auth,redirect}){
    if(!$auth.loggedIn || $auth.user.username !== 'admin'){
        return redirect('/')
    }
}