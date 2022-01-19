import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormArray,FormBuilder, Validators} from '@angular/forms';
import { ProfessionListService } from '../profession-list.service';
import { Profession } from '../profession';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public skillList:any[]=[];
  public socialOnNetwork:boolean=false;
  public addNetwork:string="Add Network Details"
  public finalReport:FormGroup;
  public registerForm: FormGroup;
  public professionDetailsList:Profession[]=[];
  constructor(public professionList:ProfessionListService,private formBuilder:FormBuilder ) {
    this.registerForm=this.formBuilder.group({
      profession: ['',Validators.required],
      company:['',Validators.required],
      website:['',Validators.required],
      location: ['',Validators.required],
      skills: ['',Validators.required],
      github: ['',Validators.required],
      bio :['',Validators.required],
      social:this.formBuilder.group({
        facebook: ['',Validators.required],
        twitter: ['',Validators.required],
        youtube:['',Validators.required],
        instagram: ['',Validators.required],
        linkedin:['',Validators.required],
      })
    });
    this.professionDetailsList=this.professionList.getProfessionList();
    this.registerForm.valueChanges.subscribe((current)=>{
      console.log(current);
    })
  }

  ngOnInit(): void {
    
  }
  onSubmitHandler():void{
    this.registerForm.patchValue({
      company:"CTS"
    });
    var obj=this.registerForm.value;
    console.log("Final submission",obj)
    this.professionList.dataDetails.push(obj);
    this.registerForm.reset();
 

  }
  onAddSkill(){
    var formGroup = new FormGroup({
      skillName: new FormControl(null)
    });

    (<FormArray>this.registerForm.get("skills")).push(formGroup);

  }
  onRemoveSkill(i:number){
    (<FormArray>this.registerForm.get("skills")).removeAt(i);

  }
  get f() { return this.registerForm.controls; }
  onClick():void{
    
    this.socialOnNetwork = !this.socialOnNetwork;
    if(this.socialOnNetwork){
      this.addNetwork="Remove the Networks";
    }else{
      this.addNetwork="Add Network Details";
    }

    return
  }


}
