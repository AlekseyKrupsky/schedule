<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

/**
 * Class CreateStepsTable
 */
class CreateLessonsTable extends Migration
{
    /**
     * Run the migrations.
     * @SuppressWarnings(PHPMD.ShortMethodName)
     * @SuppressWarnings(PHPMD.ExcessiveMethodLength)
     * @return void
     */
    public function up()
    {
        Schema::create('lessons', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedInteger('group_id')->nullable();
            $table->boolean('subgroup_1')->default(1);
            $table->boolean('subgroup_2')->default(1);
            $table->integer('day_num');
            $table->integer('order');
            $table->boolean('pr_1_week')->default(1);
            $table->boolean('pr_2_week')->default(1);
            $table->boolean('pr_3_week')->default(1);
            $table->boolean('pr_4_week')->default(1);
            $table->integer('room');
            $table->integer('subject_id');

            $table->unsignedInteger('lesson_type_id');
            $table->foreign('lesson_type_id')->references('id')->on('lesson_types');

            $table->unsignedInteger('teacher_id');
            $table->foreign('teacher_id')->references('id')->on('teachers');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('lessons');
    }
}
