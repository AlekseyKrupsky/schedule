<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

/**
 * Class CreateGroupsTable
 */
class CreateGroupsTable extends Migration
{
    /**
     * Run the migrations.
     * 
     * @return void
     */
    public function up()
    {
        Schema::create('groups', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name')->unique();
            
            $table->unsignedInteger('faculty_id')->nullable();
            $table->foreign('faculty_id')->references('id')->on('faculties');

            $table->unsignedInteger('stream_id')->nullable();
            $table->foreign('stream_id')->references('id')->on('streams');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('groups');
    }
}
