using System.Text.RegularExpressions;

class Randomizer
{
    Console.WriteLine("Skriv inn nanvnet på elevene sepparert med , ");

    string students = /*Console.ReadLine()*/ "1, 2, 3, 4";

    Console.WriteLine("Hvor mange sitter sammen?");

    string seats = /* Console.ReadLine() */ "2";

    int seatsNum = Int32.Parse(seats);

    int x = 0;

    string pattern = ",";
    string[] studentsArray = Regex.Split(students, pattern); 
    int studentCount = studentsArray.Length;
    List<string> studentsArr = studentsArray.ToList();
    List<string> studentsFinal = new List<string>();

    Random random = new Random();

    for (int i = 0; i < studentCount; i++)
    {
        int start2 = random.Next(0, studentsArr.Count);
        string student = studentsArr[start2];
        studentsFinal.Add(student);
        //Console.WriteLine(student);
        //Console.WriteLine(studentsArr);
        int index = studentsArr.FindIndex(a => a.Contains(student));
        studentsArr.RemoveAt(index);
        x++;
        if(x == seatsNum)
        {
            studentsFinal.Add("Spacer");
            x = 0;
        }
    }
    foreach (string a in studentsFinal)
    Console.WriteLine(a);
}