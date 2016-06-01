using System;
using System.Collections.Generic;
using System.Linq;
using System.Data.Linq;
using System.Data.Linq.Mapping;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.ServiceModel.Activation;
using System.ServiceModel.Web;
using www.JacobWood.com;

[ServiceContract]
[AspNetCompatibilityRequirements(RequirementsMode = AspNetCompatibilityRequirementsMode.Allowed)]
public class ContactInfoService
{
  private DataClasses1DataContext _dc = new DataClasses1DataContext("Data Source=asptest.cyberwoven.com;Initial Catalog=jacobtest;User ID=cyberwoven;Password=Cyber&8899");

  [OperationContract]
  [WebInvoke(Method = "POST", BodyStyle = WebMessageBodyStyle.Wrapped, RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json)]
  void SaveContactInfo(Contact info)
  {
    _dc.Connection.Open();

    ContactInfo ci = new ContactInfo();
    _dc.ContactInfos.InsertOnSubmit(ci);
    ci.Name = info.Name;
    ci.Phone = info.Phone;      
    ci.Email = info.Email;

    _dc.SubmitChanges();

    _dc.Connection.Close();
  }
  public class Contact
  {
    public int Id { get; set; }
    public string Name { get; set; }
    public string Phone { get; set; }
    public string Email { get; set; }
  }

}