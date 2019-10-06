<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Role Represents entity of Role as ability for getting access for different app resources.
 *
 * @package App
 * @property string name
 */
class Lesson extends Model
{
    /**
     * The table associated with the roles.
     *
     * @var string
     */
    protected $table = 'lessons';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'group_id',
        'subgroup_1',
        'subgroup_2',
        'day_num',
        'order',
        'pr_1_week',
        'pr_2_week',
        'pr_3_week',
        'pr_4_week',
        'room',
        'subject_id',
        'teacher_id',
    ];

    public $relationships = [Teacher::class, Subject::class];

    public function group()
    {
        return $this->belongsTo(Group::class, 'group_id');
    }

    public function teacher()
    {
        return $this->belongsTo(Teacher::class, 'teacher_id');
    }

    public function subject()
    {
        return $this->belongsTo(Subject::class, 'subject_id');
    }

    public function lessonType()
    {
        return $this->belongsTo(LessonType::class, 'lesson_type_id');
    }

    public function toArray()
    {
        $attributes = $this->attributesToArray();

        return array_merge($attributes, [
            'teacher' => $this->teacher,
            'subject' => $this->subject,
            'lesson_type' => $this->lessonType,
        ]);
    }

    /**
     * Indicates if the model should be timestamped.
     *
     * @var boolean
     */
    public $timestamps = false;
}
