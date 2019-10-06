<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Group.
 *
 * @package App
 * @property string name
 */
class Group extends Model
{
    /**
     * The table associated with the teachers.
     *
     * @var string
     */
    protected $table = 'groups';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'faculty_id',
        'stream_id'
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
            'group' => $this->toArray(),
            'lessons' => $this->lessons
        ];
    }

    public function getFullGroupInfo()
    {
        return [
            'group' => $this->toArray(),
            'lessons' => $this->lessons
        ];
    }
}
