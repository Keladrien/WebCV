export class AccompClass {

  type: string;
  acc_Name: string;
  date: string;
  useTech: string;
  description: string;
  id?: number;
  repoGitHub: string;
  imgLink: string;

    public constructor(type: string, acc_Name: string, date: string,imgLink:string,useTech: string,description: string,id: number,repoGitHub: string) {
        this.type = type;
        this.acc_Name = acc_Name;
        this.date = date;
        this.useTech = useTech;
        this.description = description;
        this.id = id;
        this.repoGitHub = repoGitHub;
        this.imgLink = imgLink;
    }

}
