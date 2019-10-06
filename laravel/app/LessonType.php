<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

/**
 * Class LessonType.
 *
 * @package App
 * @property string name
 */
class LessonType extends Model
{
    /**
     * The table associated with the roles.
     *
     * @var string
     */
    protected $table = 'lesson_types';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'short_name',
    ];

    /**
     * Indicates if the model should be timestamped.
     *
     * @var boolean
     */
    public $timestamps = false;
}
