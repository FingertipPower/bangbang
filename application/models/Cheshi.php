<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Cheshi extends CI_Controller {
    public function __construct(){
        parent::__construct();
    }

    public function aaa(){
        $this->db->select("*");
        $this->db->from("my");
        $query = $this->db->get()->result();
        return $query;
    }
}