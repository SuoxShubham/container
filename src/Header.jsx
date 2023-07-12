import React from "react";
import { Link } from "react-router-dom";

export default function Header(){
return(
    
<nav class="bg-white border-gray-200 dark:bg-gray-900">
  <Link to="/">Home</Link>
  <Link to="markdown">Markdown</Link>
  <Link to="fulfillment">Fulfillment</Link>
</nav>
)
}