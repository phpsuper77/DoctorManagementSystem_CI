<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class Migration_Comments extends CI_Migration {

    public function up()
    {
        $this->dbforge->add_field(array(
            'id' => array(
                'type' => 'INT',
                'constraint' => 11,
                'unsigned' => TRUE,
                'auto_increment' => TRUE
            ),
            'keyword' => array(
                'type' => 'VARCHAR',
                'constraint' => 100,
            ),
            'comment' => array(
                'type' => 'TEXT',
            ),
            'date' => array(
                'type' => 'BIGINT',
                'constraint' => 20,
            ),
        ));

        $this->dbforge->add_key("id",TRUE);
        $this->dbforge->create_table('comments',TRUE);
    }

    public function down()
    {
        $this->dbforge->drop_table('comments');
    }
}