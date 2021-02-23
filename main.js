x = document.getElementById('page-search').value
function validate(){
    if (x == ''){
        console.log('sss')
        alert('Enter search keyword.')
    }

}
x = document.getElementById('updates').value
function up_validate(){
    if(x == ''){
        document.getElementById('msg').innerHTML = 'Enter your Email'
        return false
    }

    return true
}