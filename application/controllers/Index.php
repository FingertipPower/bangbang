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
}
