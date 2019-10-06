<?php

use Illuminate\Database\Seeder;
use App\Teacher;
use App\Lesson;
use App\Subject;
use App\Room;
use App\LessonType;
use App\Stream;
use App\Faculty;
use App\Group;
use App\Department;
use App\TeacherPosition;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        Stream::firstOrCreate(['name' => "1 курс ВО"]);
        Stream::firstOrCreate(['name' => "2 курс ВО"]);
        Stream::firstOrCreate(['name' => '3 курс ВО']);
        Stream::firstOrCreate(['name' => '4 курс ВО']);
        Stream::firstOrCreate(['name' => 'Магистратура']);
        Stream::firstOrCreate(['name' => '1 курс ССО']);
        Stream::firstOrCreate(['name' => '2 курс ССО']);
        Stream::firstOrCreate(['name' => '3 курс ССО']);
        Stream::firstOrCreate(['name' => '4 курс ССО']);


        Faculty::firstOrCreate([
            'name' => 'Факультет электросвязи',
            'short_name' => 'ФЭС',
        ]);
        Faculty::firstOrCreate([
            'name' => 'Факультет инжиниринга и технологий связи',
            'short_name' => 'ФИТС',
        ]);
        Faculty::firstOrCreate([
            'name' => 'Факультет заочного и дистанционного образования',
            'short_name' => 'ФЗДО',
        ]);
        Faculty::firstOrCreate([
            'name' => 'Факультет повышения квалификации и переподготовки кадров',
            'short_name' => 'ФПКПК',
        ]);
        Faculty::firstOrCreate([
            'name' => 'Факультет довузовской подготовки',
            'short_name' => 'ФДП',
        ]);


        Group::firstOrCreate([
            'name' => 'СП641',
            'faculty_id' => 1,
            'stream_id' => 1,
        ]);

        Group::firstOrCreate([
            'name' => 'СТ541',
            'faculty_id' => 2,
            'stream_id' => 2,
        ]);


        Department::firstOrCreate([
            'name' => 'гуманитарных наук',
            'short_name' => 'ГН',
        ]);
        Department::firstOrCreate([
            'name' => 'довузовского образования и русского языка как иностранного',
            'short_name' => 'ДО',
        ]);
        Department::firstOrCreate([
            'name' => 'здорового образа жизни',
            'short_name' => 'ЗОЖ',
        ]);
        Department::firstOrCreate([
            'name' => 'инфокоммуникационных технологий',
            'short_name' => 'ИКТ',
        ]);


        TeacherPosition::firstOrCreate([
            'name' => 'ассистент',
            'short_name' => 'асс.',
        ]);
        TeacherPosition::firstOrCreate([
            'name' => 'доцент',
            'short_name' => 'доц.',
        ]);
        TeacherPosition::firstOrCreate([
            'name' => 'заведующий кафедрой',
            'short_name' => 'зав. каф.',
        ]);
        TeacherPosition::firstOrCreate([
            'name' => 'преподаватель первой категории',
            'short_name' => 'пр. 1 кат.',
        ]);


        Teacher::firstOrCreate([
            'name' => 'Алымова А.А.',
            'position_id' => 1,
            'department_id' => 1,
        ]);
        Teacher::firstOrCreate([
            'name' => 'Богдан О.М.',
            'position_id' => 1,
            'department_id' => 2,
        ]);
        Teacher::firstOrCreate([
            'name' => 'Асаенок М.А.',
            'position_id' => 2,
            'department_id' => 1,
        ]);


        Room::firstOrCreate(['location' => '1-104']);
        Room::firstOrCreate(['location' => '1-222']);
        Room::firstOrCreate(['location' => '1-404']);
        Room::firstOrCreate(['location' => '2-204']);


        LessonType::firstOrCreate([
            'name' => 'лекция',
            'short_name' => 'лк',
        ]);
        LessonType::firstOrCreate([
            'name' => 'лабораторная работа',
            'short_name' => 'лр',
        ]);
        LessonType::firstOrCreate([
            'name' => 'практическое занятие',
            'short_name' => 'пз',
        ]);
        LessonType::firstOrCreate([
            'name' => 'семинар',
            'short_name' => 'сем',
        ]);


        Subject::firstOrCreate([
            'name' => 'Автоматизация почтово-кассовых операций',
            'short_name' => 'АПКО',
        ]);
        Subject::firstOrCreate([
            'name' => 'Безопасность жизнедеятельности человека',
            'short_name' => 'БЖЧ',
        ]);
        Subject::firstOrCreate([
            'name' => 'Беспроводные локальные и сенсорные сети',
            'short_name' => 'БЛСС',
        ]);
        Subject::firstOrCreate([
            'name' => 'Бухгалтерские пакеты прикладных программ',
            'short_name' => 'БППП',
        ]);
        Subject::firstOrCreate([
            'name' => 'Бухгалтерский учет в почтовой связи',
            'short_name' => 'БУПС',
        ]);


        factory(Lesson::class)->create([
            'day_num' => 1,
            'order' => 1,
            'pr_1_week' => 1,
            'pr_2_week' => 1,
            'lesson_type_id' => 1,
            'subgroup_1' => 1,
            'subgroup_2' => 0,
            'teacher_id' => 2,
            'room' => 753
        ]);
        factory(Lesson::class)->create([
            'day_num' => 5,
            'order' => 1,
            'pr_1_week' => 1,
            'pr_2_week' => 1,
            'pr_3_week' => 1,
            'lesson_type_id' => 1,
            'subgroup_1' => 0,
            'subgroup_2' => 1,
        ]);
        factory(Lesson::class)->create([
            'day_num' => 2,
            'order' => 1,
            'pr_2_week' => 1,
            'lesson_type_id' => 1,
            'subgroup_1' => 0,
            'teacher_id' => 3,
            'subgroup_2' => 1,
            'room' => 887
        ]);
        factory(Lesson::class)->create([
            'day_num' => 3,
            'order' => 5,
            'pr_2_week' => 1,
            'lesson_type_id' => 1
        ]);
        factory(Lesson::class)->create([
            'day_num' => 3,
            'order' => 2,
            'teacher_id' => 3,
            'pr_1_week' => 1,
            'pr_4_week' => 1,
            'pr_2_week' => 1,
            'lesson_type_id' => 1
        ]);
        factory(Lesson::class)->create([
            'day_num' => 1,
            'order' => 4,
            'pr_1_week' => 1,
            'lesson_type_id' => 1,
            'room' => 677
        ]);
        factory(Lesson::class)->create([
            'day_num' => 4,
            'order' => 1,
            'pr_2_week' => 1,
            'lesson_type_id' => 1,
            'subgroup_1' => 0,
            'subgroup_2' => 1,
            'room' => 223
        ]);
        factory(Lesson::class)->create([
            'day_num' => 1,
            'order' => 2,
            'pr_2_week' => 1,
            'pr_4_week' => 1,
            'lesson_type_id' => 1,
            'room' => 123
        ]);
        /*factory(Lesson::class)->create([
            'day_num' => 7,
            'order' => 2,
            'pr_2_week' => 1,
            'pr_4_week' => 1,
            'lesson_type_id' => 1,
            'room' => 123
        ]);*/
        // $this->call(UsersTableSeeder::class);
    }
}
