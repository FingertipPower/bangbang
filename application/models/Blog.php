<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Blog extends CI_Controller {
    public function __construct(){
        parent::__construct();
    }

    public function get_blog(){
        $query = $this->db->query("SELECT * FROM `tj_blog`")->result();
        return $query;
    }
}