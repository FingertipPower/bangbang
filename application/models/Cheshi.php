<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Cheshi extends CI_Controller {
    public function __construct(){
        parent::__construct();
        $this->load->helper('file');
    }

    public function aaa(){
        $basedir = dirname(__FILE__);
//        $myfile = fopen("$basedir/aa.txt", "r") or die("Unable to open file!");
//        return fread($myfile,filesize("$basedir/aa.txt"));
//        fclose($myfile);
//          return file_get_contents("$basedir/aabb.doc");
//        $string = read_file("$basedir/aabb.doc");
//        return $string;
    }
}