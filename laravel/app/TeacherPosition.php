<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

/**
 * Class TeacherPosition.
 *
 * @package App
 * @property string name
 */
class TeacherPosition extends Model
{
    /**
     * The table associated with the roles.
     *
     * @var string
     */
    protected $table = 'teacher_positions';

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
