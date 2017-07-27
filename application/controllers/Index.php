<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Index extends CI_Controller {
    public function __construct(){
        parent::__construct();

    }
	public function main(){
        /*这是一个读取blog数据表中的数据函数
         * 前台可以直接获取到数据库中的blog表中的信息
         * 查询完成后直接传递给前台
         * */
        $this->load->model('blog');
        $msg = $this->blog->get_blog();
        echo json_encode($msg,JSON_UNESCAPED_UNICODE);
	}
	public function readBlogMsg(){
	    /*这是一个读取相应索引值博客的链接并且读取链接所对应的的txt文本
	     * 从前台传递过来一个index值，是对应数据库中相应博客的索引值
	     * 通过索引值获取相应博客的博文链接地址
	     * 并且读取出来，传递给前台
	     * */
        $this->load->model('blog');
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
            /*因为博文涉及到html标记的问题
             * 因此在这里有一个判断
             * 判断博文中的哪些html标记需要按照原文输出的
             * 哪些标记是需要解析的
             * 在这里 只有在每一行 行尾 加了** 这个标记的 才会被按照原文输出
             * */
            if(strpos($buffer,'**')){
                echo htmlspecialchars(substr_replace($buffer," ",-3))."<br/>";
            }else{
                echo $buffer."<br/>";
            }
        }
        fclose($fp);
    }

    /*此处是复制上面的代码逻辑
     * 只是更改了一些变量
     * 因为一个对应的是博客 一个对应的是算法页面
     * 大体都是一样的
     * 参照上面的注释看就行
     * */
    public function getAlgorithm(){
        $this->load->model('algorithm');
        $msg = $this->algorithm->get_algorithm();
        echo json_encode($msg,JSON_UNESCAPED_UNICODE);
    }
    public function readAlgorithm(){
        $this->load->model('algorithm');
        $index = $_GET['index'];
        $algorithmMsg = $this->algorithm->readAlgorithm($index);
        $json = json_encode($algorithmMsg,true);
        $algorithmLink = json_decode($json,true);

        header("Content-type: text/html; charset=utf-8");
        $file_name=$algorithmLink[0]['algorithmlink'];
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
