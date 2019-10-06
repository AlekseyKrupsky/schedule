<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Teacher.
 *
 * @package App
 * @property string name
 */
class Teacher extends Model
{
    /**
     * The table associated with the teachers.
     *
     * @var string
     */
    protected $table = 'teachers';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'position_id',
        'department_id'
    ];

    /**
     * Indicates if the model should be timestamped.
     *
     * @var boolean
     */
    public $timestamps = false;

    /**
     * Return teacher lessons.
     *
     * @var boolean
     */
    public function lessons()
    {
        return $this->hasMany(Lesson::class, 'teacher_id');
    }

    public function getLessonsInfo()
    {
        return [
            'teacher' => $this->toArray(),
            'lessons' => $this->lessons
        ];
    }
}
