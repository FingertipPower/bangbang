<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Algorithm extends CI_Controller {
    public function __construct(){
        parent::__construct();
    }

    public function get_algorithm(){
        $query = $this->db->query("SELECT * FROM `tj_algorithm`")->result();
        return $query;
    }
    public function readAlgorithm($index){
        $query = $this->db->query("SELECT algorithmlink FROM `tj_algorithm` WHERE todo=$index")->result();
        return $query;
    }
}

