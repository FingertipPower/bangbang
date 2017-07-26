<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Index extends CI_Controller {
    public function __construct(){
        parent::__construct();
        $this->load->model('blog');
    }
	public function main(){
        $aa = $this->blog->get_blog();
        echo json_encode($aa,JSON_UNESCAPED_UNICODE);
	}
	public function readBlogMsg(){
	    $index = $_GET['index'];
	    $blogMsg = $this->blog->readBlog($index);
        $json = json_encode($blogMsg,true);
        $blogLink = json_decode($json,true);

        header("Content-type: text/html; charset=utf-8");
        $file_name=$blogLink[0]['bloglink'];
        $fp=fopen($file_name,'r');
        while(!feof($fp))
        {
            $buffer=fgets($fp,4096);
            if(strpos($buffer,'**')){
                echo htmlspecialchars(substr_replace($buffer," ",-3))."<br/>";
            }else{
                echo $buffer."<br/>";
            }
        }
        fclose($fp);
    }
}
