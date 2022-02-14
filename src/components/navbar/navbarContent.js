export default function useNavbarContent(){
   let navbarContent = [
       {
           name : 'Home',
           url : '/home',
           class : 'menu-item',
           icon : 'far fa-home'
       },
       {
           name : 'Blog',
           url : '/blog',
           class : 'menu-item',
           icon : 'far fa-blog'
       },
       {
           name : 'Posts',
           url : '/posts',
           class : 'menu-item',
           icon : 'far fa-edit'
       },
       {
           name : 'Profile',
           url : '/profile',
           class : 'menu-item',
           icon : 'far fa-user-circle'
       },
       {
           name : 'Login',
           url : '/login',
           class : 'menu-item',
           icon : 'far fa-user'
       },
       {
           name : 'Signup',
           url : '/signup',
           class : 'menu-item',
           icon : 'far fa-user-plus'
       },
   ]

   return navbarContent;
}