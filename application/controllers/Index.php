<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Index extends CI_Controller {
    public function __construct(){
        parent::__construct();
        $this->load->model('cheshi');
        $this->load->helper('file');
    }
	public function main(){
        $basedir = dirname(__FILE__);
//        $this->load->view('index');
//        $bbb = $this->cheshi->aaa();
//        echo $bbb;
//        $string = read_file("$basedir/aabb.doc");
//        echo $string;
//        echo file_get_contents("$basedir/aabb.doc");
        $basedir = dirname(__FILE__);
        $filename = "aabb.mht";
        $content = shell_exec("$basedir/aabb.mht");
        echo $content;
	}
}
