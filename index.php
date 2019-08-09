<?php

    require_once("lib/view/Template.php");
    use raelgc\view\Template;

    $tpl = new Template("index.html");

    $tpl->show();

?>