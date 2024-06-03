import Link from 'next/link'

const NewsPage = () =>{
    return <>
         NewsPage routiing
         <hr></hr>

         <Link href="/news/*">
         newpage
         </Link>
  <hr></hr>
         <Link href="/news/other">
            other page
         </Link>
     </>
 }
 
 export default  NewsPage;