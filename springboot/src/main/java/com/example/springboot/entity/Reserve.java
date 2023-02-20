package com.example.springboot.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import java.io.Serializable;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

/**
 * <p>
 * 
 * </p>
 *
 * @author 
 * @since 2022-05-15
 */
@Getter
@Setter
@ApiModel(value = "Reserve对象", description = "")
public class Reserve implements Serializable {

    private static final long serialVersionUID = 1L;

    @TableId(value = "id", type = IdType.AUTO)
    private Integer id;

    @ApiModelProperty("套餐id")
    private Integer packageId;

    @ApiModelProperty("用户id")
    private Integer userId;

    @ApiModelProperty("预约时间")
    private String time;

    @ApiModelProperty("状态")
    private String state;

    @ApiModelProperty("报告")
    private String content;
    @TableField(exist = false)
    private String packageName;


}
