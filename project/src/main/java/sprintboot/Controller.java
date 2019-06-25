package sprintboot;
import org.springframework.web.bind.annotation.*;
@RestController
public class Controller {
    @GetMapping("/sum")
    public String sum(
            @RequestParam(name="a") int a,int b) {
        int optellen = a+b;
        return a + "+"+ b + "=" + optellen;
    }

}
