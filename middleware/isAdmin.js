export default function ({$auth,redirect}){
    if($auth.user.username !== "admin"){
        return redirect('/')
    }
}