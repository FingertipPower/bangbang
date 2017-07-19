<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Index extends CI_Controller {
	public function main(){
//        $this->load->view('index');
        $this->load->model('cheshi');
        $bbb = $this->cheshi->aaa();
        echo $bbb;
	}
}