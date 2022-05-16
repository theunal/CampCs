using System;

namespace ConsoleApp1
{
    public class Program
    {
        static void Main(string[] args)
        {
            string str = "Hello aple pie";
            string[] words = str.Split(' ');

            string result = "";
            int maxTekrar = 0;
            foreach (string word in words)
            {
                for (int i = 0; i < word.Length; i++)
                {
                    int count = 1;
                    for (int j = i + 1; j < word.Length; j++)
                    {
                        if (word[i] == word[j])
                        {
                            count++;
                        }
                    }
                    if (count > maxTekrar)
                    {
                        maxTekrar = count;
                        result = word;
                    }
                }
            }
            
            if (maxTekrar == 0) {
                Console.WriteLine("tekrar yok: " + -1);
            } else
            {
                Console.WriteLine("kelime: " + result);
                Console.WriteLine("tekrar sayisi: " + maxTekrar);
            }
            
            






        }
    }
}
